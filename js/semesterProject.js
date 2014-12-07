////This is the start to the project javascript/////
	/*var name = $('#item_name').value();
	var calmin = $('#cal_min').value();
	var calmax = $('#cal_max').value();
	var totalfat = $('#total_fat').value();*/

$(document).ready(function() {
	$('form').on('submit',function(e) {
			e.preventDefault();

	var name = $('#item_name').val();
	var calmin = $('#cal_min').val();
	var calmax = $('#cal_max').val();

 

	

		$.ajax({
			data: 'item_name='+name+'&cal_min='+calmin+'&cal_max='+calmax,
			dataType: 'json',
			url: 'search_test.php',
				success: function(response) {
					var output ="";
					for(i in response.hits){
					output +='<div class="search"><div class="container">Click the find recipes button to find '+name+' recipes with</div>'+'<div class="calories">'+ response.hits[i].fields.nf_calories + '</div>'+'<div class ="recipe"><a class="button" href="recipe.php" >Find Recipes</a></div></div>';
					}
					$('html :not(body,head,body,#main_container,header,div,h1,h2,a,br,p,form,footer)').empty();
					$("#out_response").html($(output));
					console.log(response);

				},
				error: function(response) {
					console.dir(response);
				}
		});
	});
	

	$(document).on('click','a[href^="recipe.php"]',function(e) {
			e.preventDefault();
			
			var name = $('#item_name').val();

			

			var calories = $(this).closest('.search').find('.calories').text();

			$.ajax({ 
				data: 'calories='+calories+'&item_name='+name,
				method: 'get',	
				dataType: 'json',
				url: 'recipe.php',
				
				success: function(response) {
					var output_two ="";
					for(i in response.matches){
					output_two +='<div class="search"><div class="id" hidden>'  + response.matches[i].id + '</div><div class="name" >'+response.matches[i].sourceDisplayName+'</div>'+'<div class="brand">'  + response.matches[i].recipeName + '</div><div class="calories">'  + response.matches[i].rating + '</div> <div class ="recipe"><a class="button" href="recipe_card.php" >Get Recipe</a></div></div>';
					}

					$('html :not(body,head,body,#main_container,header,div,h1,h2,a,br,p,form,footer)').empty();
					$('#out_response').html($('<div>'+response.attribution.html+'</div>'+'<div class="item">Cuisine</div><div class="brand_name">Recipe</div><div class="fat_total">Rating</div>'+ output_two));
					console.log(response);
					console.log(calories);
				},
				error: function(response) {
					console.dir(response);
				}
			});
		});
$(document).on('click','a[href^="recipe_card.php"]',function(e) {
			e.preventDefault();
			

			var recipe_card = $(this).closest('div.search').find('div.id').text();

			$.ajax({ 
				data: 'recipeId='+recipe_card,
				method: 'get',	
				dataType: 'json',
				url: 'recipe_card.php',
				
				success: function(response) {
					var ingrediant = "";
					for (i in response.ingredientLines){
						ingrediant +='<div>'+response.ingredientLines[i]+'</div>';
					}

					$('html :not(body,head,body,#main_container,header,div,h1,h2,a,br,p,form,footer)').empty();
					$('#out_response').html($('<div>'+response.attribution.html+'</div>'+'<div>Source Name:'+response.source.sourceDisplayName+'</div>'+'<div>Total time:'+response.totalTime+'</div>'+'<div>Ingrediants:'+ingrediant+'</div>'+'<div>Servings:'+response.numberOfServings+'</div>'+'<img src='+response.images[0].hostedLargeUrl+'></img>'+'<div>Recipe name:'+response.name+'</div>' ));
					console.log(response);
				},
				error: function(response) {
					console.dir(response);
				}
			});
		});
});







