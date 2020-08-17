
function processMap() {
  var displaySupportedRegions = false;

  openMap(false);

  jQuery('#usa-back').click(function(e) {        
    openMap(false);
  });      

  jQuery('#show-regions').click(function(e) {
    e.preventDefault();

    displaySupportedRegions = !displaySupportedRegions;
    showSupportedRegions(displaySupportedRegions);
  });

  registerCountryFilter(jQuery('#search_map'), selectCountry);

  function showSupportedRegions(show) {                
    if (show) {                    
      map.setSelectedRegions(getDistributerCodes());          
    } else {
      map.clearSelectedRegions();
    }        
  }

  function openMap(usaMap) {
    var mapConfig = createMapConfiguration();

    jQuery('#world-map').empty();
    jQuery('#usa-map-content').empty();        
    // Hide any pending tooltips...
    jQuery('.jvectormap-tip').css('display', 'none');
    // Hide any pending distributer infos...
    jQuery('#distributer-info').empty();
    jQuery('#search_map').prop('disabled', usaMap);

    var worldConfig = jQuery.extend({}, mapConfig, { container: jQuery('#world-map') });      
    var usaConfig   = jQuery.extend({}, mapConfig, { container: jQuery('#usa-map-content'), map: 'us_aea_en' });

    var config = usaMap ? usaConfig : worldConfig;        

    jQuery('#world-map').css('display', usaMap ? 'none'  : 'block');        
    jQuery('#usa-map').css(  'display', usaMap ? 'block' : 'none' );

    map = new jvm.Map(config);

    showSupportedRegions(false);
    populateCountries();

    if (usaMap) {          
      jQuery('.region_toggle').hide();
    } else {
      jQuery('.region_toggle').show();
    }
  }

  function populateCountries() {
    var dropDown = jQuery('#findcountry')

    dropDown.empty()
    dropDown.change(handleCountryChange)

    appendSortedOptions(window.distributes, dropDown, function(distributer) {
      return distributer.country_name
    })
  }

  function handleCountryChange() {
    var selected = jQuery("#findcountry option:selected")
    var states   = null
    var country  = null

    if (selected && selected.length > 0) {
      var selectedCountry = jQuery(selected[0]).text()
      
      var distributer = window.distributes.find(function(distributer) {
        return distributer.country_name === selectedCountry
      })

      country = distributer && distributer.country_code
      
      handleCountryClick(country)

      states = distributer
        && distributer.states
        && distributer.states.length > 0
        && distributer.states      
    }

    var dropDown = jQuery('#findstate')
    dropDown.change(function() {
      handleStateChange(country)()
    })
    
    if (states) {
      appendSortedOptions(states, dropDown, function(state) {
        return state.state
      })
      
      jQuery('.country.state').removeClass('hidden')
    } else {
      jQuery('.country.state').addClass('hidden')
    }    
  }

  function handleStateChange(country) {    
    return function() {
      var selected = jQuery("#findstate option:selected")

      if (selected && selected.length > 0) {
        var state = jQuery(selected[0]).text()
        handleCountryClick(country, state)
      }
    }
  }

  function appendSortedOptions(arr, el, getFunc) {
    var options = []

    for (var i=0; i < arr.length; i++) {
      options.push(getFunc(arr[i]))
    }

    options.sort(function(country1, country2) {
      return country1.localeCompare(country2)
    })

    for (var i=0; i < options.length; i++) {
      el.append('<option>' + options[i] + '</option>')
    }
  }

  function createMapConfiguration() {
    var weights = {};

    if (window.distributes) {
      for (var i=0; i < window.distributes.length; i++) {            
        var distributer = window.distributes[i];

        if (distributer.service_regions && Array.isArray(distributer.service_regions)) {
          for (var j=0; j<distributer.service_regions.length; j++) {                
            weights[distributer.service_regions[j]] = 1;
          }
        }
      }
    }

    jQuery('#world-map path').click(function(e){
      console.log(jQuery(this).attr('data-code'));
    });

    var mapConfig = {
      backgroundColor: '#FFFFFF',
      onRegionClick: onRegionClick,
      // onRegionOver

      series: {
        regions: [{
          values: weights,
          scale: ['#b0bcbe', '#aaaaaa'],
          normalizeFunction: 'polynomial'
        }]
      },

      regionStyle: {
        initial: {
          "fill": '#bec8ca',
          "fill-opacity": 1,
          "stroke": 'none',
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          "fill-opacity": 0.8,
          "cursor": 'pointer',
          "fill": '#30bcb7'
        },
        selected: {
          "fill": '#30bcb7'
        },
        selectedHover: {
        }            
      }
    }

    return mapConfig;
  }

  // function onRegionOver(e, code) {
  //   var distributers = findDistributers(code);

  //   if (distributers.length === 0) {
  //     e.preventDefault();
  //   }
  // }

  var US_STATE_PREFIX = 'US-'

  function onRegionClick(e, code) {
    if ('US' === code) {
      handleUSClick();
    } else if (code.indexOf(US_STATE_PREFIX) === 0) {
      var state = code.substring(US_STATE_PREFIX.length)
      handleCountryClick('US', state)
    } else {
      handleCountryClick(code);
    }
  }

  function handleUSClick() {
    openMap(true);
  }

  function handleCountryClick(code, state) {
    var distributers = findDistributers(code);

    if (distributers.length !== 0) {
      selectCountry(code, state);
      showDistributers(code, state);
    }
  }

  function showDistributers(code, state) {
    var distributers = findDistributers(code);

    jQuery('#distributer-info').empty();

    if (distributers) {
      for (var i=0; i<distributers.length; i++) {
        var distributer = distributers[i];

        var actualDistributers = null

        if (state && distributer.states) {
          // var stateDistributers = distributer.states.find(function(stateObject) {
          //   return stateObject.state === state
          // })
          // IE sucks - need a polyfill - that a workaround for now...
          // (BEGIN)
          var stateDistributers = null
          for (var j=0; j<distributer.states.length; j++) {
            var stateObject = distributer.states[j]

            if (stateObject.state === state) {
              stateDistributers = stateObject
              break
            }
          }
          // (END)
          
          actualDistributers = stateDistributers && stateDistributers.distributers
        } 
        
        actualDistributers = actualDistributers || [ distributer ]

        for (var j=0; j<actualDistributers.length; j++) {
          var source   = jQuery("#distributer-template").html();
          var template = Handlebars.compile(source);
          var html     = template(actualDistributers[j]);

          jQuery('#distributer-info').append(html);
        }        
      }
    }
  }

  function findDistributers(code) {
    if (window.distributes) {

      var distributers = [];

      for (var i=0; i<window.distributes.length; i++) {
        var distributer = window.distributes[i];

        if (distributer.service_regions) {
          for (var j=0; j<distributer.service_regions.length; j++) {
            var serviceRegion = distributer.service_regions[j];

            if (serviceRegion == code) {
              distributers.push(distributer);
              break;
            }
          }
        }            
      }

      return distributers;
    }
  }

  function getDistributerCodes() {
    var codes = [];
    // UK is GB etc - guard agaist be unsupported codes ...
    var unsupportedRegions = ['UK', 'MT', 'SG'];

    if (window.distributes) {
      for (var i=0; i<window.distributes.length; i++) {
        var code = window.distributes[i].country_code;

        if (codes.indexOf(code) < 0) {
          if (unsupportedRegions.indexOf(code) < 0) {
            codes.push(code);
          }              
        }            
      }
    }  

    return codes;      
  }

  function selectCountry(code, state) {
    code = state && code === 'US'
      ? US_STATE_PREFIX + state
      : code

    try {
      map.setFocus({
        region:  code,
        animate: true
      });
      map.clearSelectedRegions();
      map.setSelectedRegions(code);  
    } catch (ex) {
      console.log('USA map is not active - bail out')
    }

    showDistributers(code);
  }
}