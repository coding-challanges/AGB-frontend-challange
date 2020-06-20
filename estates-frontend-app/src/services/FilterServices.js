var FilterService =  {
    filterProperty(geoDataJsonfeatures, filter, filterValue){
        var filteredGeoDataJson = geoDataJsonfeatures.filter(function(property){
            return property.properties.project[filter] == filterValue;
        });
        return filteredGeoDataJson;
    }
}

export default FilterService

