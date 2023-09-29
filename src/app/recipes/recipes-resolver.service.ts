import { inject } from "@angular/core";
import { Recipe } from "./recipe.module";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";


export const recipesResolverService: ResolveFn<Recipe[]> =
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    dataStorageService: DataStorageService = inject(DataStorageService),
    recipeService: RecipeService = inject(RecipeService)
  ) => {

    const recipes = recipeService.getRecipes();

    if (recipes.length === 0) {
      return dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
}

