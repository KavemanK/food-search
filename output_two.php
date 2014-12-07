<?php
require 'recipe.php';


print '<div>';			        	
print '<div>'$jsonDecoded->attribution'</div>';
print $jsonDecoded->sourceDisplayName;
print $jsonDecoded->criteria->nutritionRestrictions;
print $jsonDecoded->matches[1]->id;
print $jsonDecoded->matches[1]->recipeName;
print '</div>';
?>