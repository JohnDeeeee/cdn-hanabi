// novy script
var $grid = $('.grid-preklad').isotope({
  itemSelector: '.color-shape'
});

var filters = {};

$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  var filterGroup = $select.attr('value-group');
  filters[ filterGroup ] = event.target.value;
  var filterValue = concatValues( filters );
  $grid.isotope({ filter: filterValue });
});

function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}