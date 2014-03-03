var DV = DV || {};

DV.appKey = "782332c3660979ce31e400adb820c186cf776b5f";

DV.Urls = {
    /** Geographical name definitions */
    geoDefs: "http://api.census.gov/data/2010/acs5/geography.json",
    
    /** Variable name definitions */
    varDefs: "http://api.census.gov/data/2010/acs5/variables.json",
    sf1Base: "http://api.census.gov/data/2010/sf1?key={key}",
    acsBase: "http://api.census.gov/data/2010/acs5?key={key}",
    
    getSf1Base: function() {
        return DV.Urls.sf1Base.replace("{key}", DV.appKey);
    },
    
    getAcsBase: function() {
        return DV.Urls.acsBase.replace("{key}", DV.appKey);
    }
}