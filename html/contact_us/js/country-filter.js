

function registerCountryFilter($searchBoxEl, selectedCountryCodeCallback) {

	var countryHash = {
    "US": "United States",
    "VN": "Vietnam",
    "BR": "Brazil",
    "TH": "Thailand",
    "PH": "Philippines",
    "MY": "Malaysia",
    "ID": "Indonesia",
    "PE": "Peru",
    "HN": "Honduras",
    "EC": "Ecuador",
    "YE": "Yemen",    
    "AE": "United Arab Emirates",
    "ZA": "South Africa",
    "QA": "Qatar",
    "PK": "Pakistan",
    "OM": "Oman",
    "KW": "Kuwait",    
    "BH": "Bahrain",
    //"SG": "Singapore",
    "MY": "Singapore", // Our map doesn't recognize Singapore - map it to Malazya instead
    "CA": "Canada",
    "PT": "Portgual",
    "KR": "Korea",
    "CZ": "Czech Republic",
    "PA": "Panama",
    "LK": "Sri Lanka",
    "MX": "Mexico",
    "IS": "Island",
    "CL": "Chile",
    "NZ": "New Zealand",
    "BO": "Bolivia",
    "KE": "Kenya",
    "IN": "India",
    "JP": "Japan",
    "BE": "Belgium",
    "FR": "France",
    "BG": "Bulgaria",
    "DK": "Denmark",
    "HR": "Croatia",
    "DE": "Germany",
    "BA": "Bosnia and Herz.",
    "HU": "Hungary",
    "JO": "Jordan",
    "DZ": "Algeria",
    "JE": "Jersey",
    "FI": "Finland",
    "BY": "Belarus",
    "FO": "Faeroe Is.",
    "PS": "Palestine",
    "LB": "Lebanon",
    "PT": "Portugal",
    "NO": "Norway",
    "TR": "Turkey",
    "LI": "Liechtenstein",
    "LV": "Latvia",
    "EE": "Estonia",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "AT": "Austria",
    "RO": "Romania",
    "EG": "Egypt",
    "PL": "Poland",
    "LY": "Libya",
    "-99": "N. Cyprus",
    "CH": "Switzerland",
    "GR": "Greece",
    "RU": "Russia",
    "IQ": "Iraq",
    "IS": "Iceland",
    "AL": "Albania",
    "IT": "Italy",
    "GG": "Guernsey",
    "CZ": "Czech Rep.",
    "CY": "Cyprus",
    "IM": "Isle of Man",
    "GB": "United Kingdom",
    "NL": "Netherlands",
    "AD": "Andorra",
    "IE": "Ireland",
    "ES": "Spain",
    "ME": "Montenegro",
    "MD": "Moldova",
    "SY": "Syria",
    "TN": "Tunisia",
    "MA": "Morocco",
    "AX": "Aland",
    "RS": "Serbia",
    "GE": "Georgia",
    "MK": "Macedonia",
    "_0": "Kosovo",
    "SK": "Slovakia",
    "MT": "Malta",
    "SI": "Slovenia",
    "SM": "San Marino",
    "SA": "Saudi Arabia",
    "UA": "Ukraine",
    "SE": "Sweden",
    "IL": "Israel",
    "AU": "Australia",
    "CN": "China",
    "MN": "Mongolia",
    "BD": "Bangladesh",
    "AR": "Argentina",
    "TW": "Taiwan",
    "KZ": "Kazakhstan",
    "VE": "Venezuela",
    "PR": "Puerto Rico",
    "GT": "Guatemala",
    "CO": "Colombia"
  };

  // All countries to lower case...
  (function() {
    for (key in countryHash) {
      countryHash[key] = countryHash[key].toLowerCase()
    }        
  })();

  var countryNames = (function(countryHash) {
    var countries = new Array();

    for (key in countryHash) {          
      countries.push(countryHash[key]);
    }

    return countries;
  })(countryHash);


  function findCountryCode(countryName) {
    for (key in countryHash) { 
      if (countryHash[key] === countryName) {
        return key;
      }
    }        
  };

  $searchBoxEl.keypress(function(e) {      
    if (e.keyCode == 13) {             
      text = jQuery('#search_map').val();

      if (!text || text.trim().length == 0) {
        return;
      }

      var countryName = searchCountry(text.toLowerCase());
      var countryCode = null

      if (countryName && (countryCode = findCountryCode(countryName))) {            
        selectCountry(countryCode);
      }          
    }                        
  });

  function searchCountry(country) {
    var countryCode = null;

    for (key in countryHash) {
      var countryName = countryHash[key];      

      if (countryName.indexOf(country) == 0) {        
        countryCode = key;
        break;
      }
    }

    if (countryCode && selectedCountryCodeCallback && typeof selectedCountryCodeCallback == 'function') {
      selectedCountryCodeCallback.call(this, countryCode);      
    }
  };

  // function searchCountry(country) {        
  //   // var sortedCountries = findClosest(countryNames, country);        
  //   // if (sortedCountries.length > 0) {
  //   //   var closestCountry = sortedCountries[0];
  //   //   return closestCountry;
  //   // }        
  // };

  //   var levenshtein = (function() {        
  //     var row2 = [];
  //     return function(s1, s2) {
  //         if (s1 === s2) {
  //             return 0;
  //         } else {
  //             var s1_len = s1.length, s2_len = s2.length;
  //             if (s1_len && s2_len) {
  //                 var i1 = 0, i2 = 0, a, b, c, c2, row = row2;
  //                 while (i1 < s1_len)
  //                     row[i1] = ++i1;
  //                 while (i2 < s2_len) {
  //                     c2 = s2.charCodeAt(i2);
  //                     a = i2;
  //                     ++i2;
  //                     b = i2;
  //                     for (i1 = 0; i1 < s1_len; ++i1) {
  //                         c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
  //                         a = row[i1];
  //                         b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
  //                         row[i1] = b;
  //                     }
  //                 }
  //                 return b;
  //             } else {
  //                 return s1_len + s2_len;
  //             }
  //         }
  //     };
  //   })();

  //   var findClosest = function(arr, str) { 
  //     return arr.sort(function (a, b) {
  //       return levenshtein(a, str) - levenshtein(b, str);
  //     });
  //   };

}