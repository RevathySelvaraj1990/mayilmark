import React, { useState } from "react";

import recipe from "../../assets/images/recipes/recipe.png";
import UntitledDesign from "../../assets/images/recipes/Untitled-design.jpg";
import PHULKA from "../../assets/images/recipes/PHULKA.jpg";
import PULAO from "../../assets/images/recipes/PULAO.jpg";
import PARATHA from "../../assets/images/recipes/PARATHA.jpg";
import TADKA from "../../assets/images/recipes/TADKA.jpg";
import LADDU from "../../assets/images/recipes/LADDU.jpg";
import BONDA from "../../assets/images/recipes/BONDA.jpg";
import PANCAKES from "../../assets/images/recipes/PANCAKES.jpg";
import KAMBU from "../../assets/images/recipes/KAMBU.jpg";
import RagiPuttu from "../../assets/images/recipes/RAGIPUTTU.jpg";
import GARLICVERMICELLI from "../../assets/images/recipes/GARLIC-VERMICELLI.jpg";
import VERMICELLIKESARI from "../../assets/images/recipes/VERMICELLI-KESARI.jpg";
import VERMICELLI from "../../assets/images/recipes/VERMICELLI.jpg";
import murukku from "../../assets/images/recipes/Murukku.jpg";
import pappad from "../../assets/images/recipes/pappad.jpg";
import moringa from "../../assets/images/recipes/Moringa.jpg";
import banner from "../../assets/images/recipes/banner.png";
import element from "../../assets/images/recipes/element.png";
import edge2 from "../../assets/images/about/edge2.png";
import ravapaysam from "../../assets/images/recipes/ravapaysam.jpg";
import { recipesData } from "../../data/recipes";

import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const customStyles = {
  content: {
    width: "88%",
    height: "70vh",
    top: "57%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1a237",
    borderRadius: "10px",
    position: "relative",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="recipes_main_wrapper">
      <div className="recipe_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>
      <div className="header">
        <img src={element} alt="banner" className="left_element" />
        <img src={element} alt="banner" className="right_element" />
        <h1>Recipes</h1>
      </div>
      <div className="recipes_wrapper">
        <img src={edge2} alt="edge" className="edge1" />
        <img src={edge2} alt="edge" className="edge2" />
        <img src={edge2} alt="edge" className="edge3" />
        <img src={edge2} alt="edge" className="edge4" />
        <div className="recipe">
          <img src={recipe} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>Rava</span> Pudding
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("RAVA PUDDING");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={UntitledDesign} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>Rava</span> Idli
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("RAVA IDLI");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={ravapaysam} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>Rava</span> Payasam
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("RAVA PAYASAM");
            }}
          >
            View Recipe
          </button>
        </div>

        <div className="recipe">
          <img src={PARATHA} alt="recipe" />
          <p>
            WHOLE
            <span style={{ color: "rgb(249, 147, 27)" }}> WHEAT </span>PARATHA
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("WHOLE WHEAT PARATHA");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={PULAO} alt="recipe" />
          <p>
            BROKEN <span style={{ color: "rgb(249, 147, 27)" }}>WHEAT</span>{" "}
            VEGETABLE PULAO
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("BROKEN WHEAT VEGETABLE PULAO");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={PHULKA} alt="recipe" />
          <p>
            WHOLE<span style={{ color: "rgb(249, 147, 27)" }}> WHEAT </span>{" "}
            PHULKA
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("WHOLE WHEAT PHULKA");
            }}
          >
            View Recipe
          </button>
        </div>

        <div className="recipe">
          <img src={LADDU} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> URID </span>DHAL LADDU
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("URID DHAL LADDU");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={TADKA} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> URAD </span> DHAL
            TADKA
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("URAD DAL TADKA");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={BONDA} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>URID</span> DHAL BONDA
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("URID DHAL BONDA");
            }}
          >
            View Recipe
          </button>
        </div>

        <div className="recipe">
          <img src={PANCAKES} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> MULTIGRAIN </span>
            PANCAKES
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("MULTIGRAIN PANCAKES");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={KAMBU} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> KAMBU </span> DOSAI
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("KAMBU DOSAI");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={RagiPuttu} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>RAGI</span> PUTTU
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("RAGI PUTTU");
            }}
          >
            View Recipe
          </button>
        </div>

        <div className="recipe">
          <img src={GARLICVERMICELLI} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> WHEAT </span>
            GARLIC{" "}
            <span style={{ color: "rgb(249, 147, 27)" }}>VERMICELLI</span>
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("VEGETABLE FLAVOURED WHEAT GARLIC VERMICELLI");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={VERMICELLIKESARI} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> VERMICELLI </span>{" "}
            KESARI
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("VERMICELLI KESARI");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={VERMICELLI} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>VERMICELLI</span>{" "}
            MIXTURE
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("VERMICELLI MIXTURE");
            }}
          >
            View Recipe
          </button>
        </div>

        <div className="recipe">
          <img src={murukku} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> MURUKKU </span>
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("MURUKKU");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={pappad} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}> PAPPAD </span> BAJJI
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("PAPPAD BAJJI");
            }}
          >
            View Recipe
          </button>
        </div>
        <div className="recipe">
          <img src={moringa} alt="recipe" />
          <p>
            <span style={{ color: "rgb(249, 147, 27)" }}>MORINGA</span> LEAF
            POWDER SOUP
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectedRecipe("MORINGA LEAF POWDER SOUP");
            }}
          >
            View Recipe
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <IoClose className="close_icon" onClick={() => setIsOpen(false)} />
        {recipesData.map((recipe, index) => {
          return (
            <div key={index}>
              {recipe.title === selectedRecipe && (
                <div className="recipes_content_wrapper">
                  <h2>{recipe.title}</h2>

                  <div className="ingredient_content">
                    <img src={recipe.image} />
                    <div>
                      <p>
                        {" "}
                        <h3>Ingredients</h3>
                      </p>
                      <div className="ingredients">
                        {recipe?.ingredients?.map((ingredient) => {
                          return <p className="ingredient">{ingredient}</p>;
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="recipe_method">
                    <h4>Method :</h4>
                    <ul>
                      {recipe?.method?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Modal>
    </div>
  );
}

export default Recipes;
