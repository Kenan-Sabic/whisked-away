import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import RecipePlaceholder from "./Recipe_Placeholder";

const Suggestions = () => {
  return (
    <div className="max-w-[100vw]">
      <div className="filters ml-11 mt-8 flex flex-col flex-wrap items-center justify-center text-4xl md:flex-row">
        <p className="-ml-16  rounded-lg px-2 py-2  font-extrabold text-neutral-700">
          YOU WILL LOVE THESE
        </p>
      </div>

      <div className="daily-line mx-0 my-auto -mt-0 ml-2 h-0.5 w-[95%] justify-center bg-neutral-700 md:ml-8  "></div>
      <div className="ml-24 flex flex-wrap justify-between md:ml-8 md:space-x-8 mr-8 md:mr-12">
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
          ingredients="- 500g all-purpose flour
          - 10g salt
          - 80g granulated sugar
          - 25g fresh yeast or 10g active dry yeast
          - 300ml warm milk
          - 250g unsalted butter, chilled
          - 1 egg, beaten"
          instructions="In a large mixing bowl, combine the flour, salt, and sugar.
          If using fresh yeast, dissolve it in the warm milk. If using active dry yeast, dissolve it in 1/4 cup warm water with a pinch of sugar, and let it sit for 5 minutes.
          Add the yeast mixture to the flour mixture, and stir until a shaggy dough forms.
          Turn the dough out onto a lightly floured surface, and knead for 10 minutes until smooth and elastic.
          Shape the dough into a ball, and place it in a lightly oiled bowl. Cover the bowl with plastic wrap, and let the dough rise in a warm place for 1 hour, until doubled in size.
          After the dough has risen, punch it down and shape it into a rectangle.
          Cut the chilled butter into thin slices, and place them in a single layer over two-thirds of the dough.
          Fold the uncovered third of the dough over the butter, then fold the other third over the top, like a letter.
          Turn the dough 90 degrees, and roll it out into a long rectangle again.
          Fold the rectangle into thirds again, like a letter.
          Wrap the dough in plastic wrap, and refrigerate for at least 1 hour, or overnight.
          After the dough has chilled, roll it out into a long rectangle, about 1/4 inch thick.
          Cut the rectangle into triangles, and roll each triangle up from the wide end to the narrow end, tucking the narrow end underneath.
          Place the croissants on a baking sheet lined with parchment paper, and brush them with beaten egg.
          Let the croissants rise in a warm place for 30-45 minutes, until they are puffy and doubled in size.
          Preheat the oven to 400°F (200°C).
          Brush the croissants with egg again, and bake for 15-20 minutes, until golden brown.
          Remove the croissants from the oven, and let them cool on a wire rack before serving. Enjoy!"
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
      </div>
    </div>
  );
};

export default Suggestions;
