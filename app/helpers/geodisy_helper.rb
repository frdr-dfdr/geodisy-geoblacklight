module GeodisyHelper
  ##
  # Selects the basemap used for map displays
  # @return [String]
  def geoblacklight_basemap

    if I18n.locale == :fr then
      return "OpenStreetMap_France"
    else
      return "Esri_WorldTopoMap"
    end
  end
end
