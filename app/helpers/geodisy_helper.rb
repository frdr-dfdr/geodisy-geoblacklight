module GeodisyHelper
  ##
  # Selects the basemap used for map displays
  # @return [String]
  def geoblacklight_basemap

    Rails.logger.error(I18n.locale)
    if I18n.locale == :fr then
      Rails.logger.error("OpenStreetMap_France")
      return "OpenStreetMap_France"
    else
      Rails.logger.error("Esri_WorldTopoMap")
      return "Esri_WorldTopoMap"
    end
  end
end
