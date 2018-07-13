import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1512058454905-6b841e7ad132?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1859a8354ebc4050a3c290fc57fa66f&auto=format&fit=crop&w=1586&q=80'),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1512058454905-6b841e7ad132?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1859a8354ebc4050a3c290fc57fa66f&auto=format&fit=crop&w=1586&q=80')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
