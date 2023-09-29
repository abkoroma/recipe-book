import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.module";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('singleRecipeItem') recipe!: Recipe;
  @Input() index!: number;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

}
