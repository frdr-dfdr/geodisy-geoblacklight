$(document).on 'turbolinks:load', ->
  I18n.locale = $('body').data('locale')
  #I18n.fallbacks = true