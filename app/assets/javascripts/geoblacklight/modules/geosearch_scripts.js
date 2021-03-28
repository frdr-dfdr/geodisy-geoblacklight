export function redo(){
 return String(<a class="redo btn btn-primary"><span class="glyphicon glyphicon-repeat"></span></a>);
}

export function move_map(){
return String(<label class="move_map"><input type="checkbox"></label>);
}

export function search_here(){
return String(<a class="search_here btn btn-primary"></a>);
}
<script>
  $(document).on('turbolinks:load', function() {
    $('.redo').text(I18n.t('map.redo_search'));
  });
</script>

<script>
  $(document).on('turbolinks:load', function() {
    $('.move_map').text(I18n.t('map.move_map_search'));
  });
</script>

<script>
  $(document).on('turbolinks:load', function() {
    $('.search_here').text(I18n.t('map.search_here'));
  });
</script>