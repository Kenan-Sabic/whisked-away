import React, { useRef, useState, useEffect } from "react";
import plusSymbol from "../assets/plusSymbol.svg";

const AddRecipeTab = () => {
  const fileInputRef = useRef(null);
  const servingSizeRef = useRef(null);
  const titleRef = useRef(null);
  const ingredientsRef = useRef(null);
  const prepTimeRef = useRef(null);
  const howToPrepareRef = useRef(null);
  const tagsRef = useRef(null);

  const [servingSize, setServingSize] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [howToPrepare, setHowToPrepare] = useState("");
  const [tags, setTags] = useState("");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleServingSizeChange = (event) => {
    setServingSize(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };

  const handlePrepTimeChange = (event) => {
    setPrepTime(event.target.value);
  };

  const handleHowToPrepareChange = (event) => {
    setHowToPrepare(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  useEffect(() => {
    const resizeTextArea = (ref) => {
      if (ref.current) {
        ref.current.style.height = "auto";
        ref.current.style.height = `${ref.current.scrollHeight}px`;
      }
    };

    // Resize text areas on initial render
    resizeTextArea(servingSizeRef);
    resizeTextArea(titleRef);
    resizeTextArea(ingredientsRef);
    resizeTextArea(prepTimeRef);
    resizeTextArea(howToPrepareRef);
    resizeTextArea(tagsRef);

    // Resize text areas on content change
    const handleResize = () => {
      resizeTextArea(servingSizeRef);
      resizeTextArea(titleRef);
      resizeTextArea(ingredientsRef);
      resizeTextArea(prepTimeRef);
      resizeTextArea(howToPrepareRef);
      resizeTextArea(tagsRef);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    servingSizeRef,
    titleRef,
    ingredientsRef,
    prepTimeRef,
    howToPrepareRef,
    tagsRef,
  ]);

  return (
    <div>
      <div className="px-6">
        <div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:gap-x-6 md:grid-cols-11">
            <div className="flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1
                  onClick={() => {
                    window.location.href = "/user/recipes";
                  }}
              >
                Your Recipes
              </h1>
            </div>
            <div className="flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1>Your Favorites</h1>
            </div>
            <div className="col-span-2 flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1>Saved Recipes</h1>
            </div>
            <div
              onClick={() => {
                window.location.href = "/user/recipes/add";
              }}
              className="col-span-2 flex h-14 min-w-[150px] md:min-w-[70px] lg:min-w-[100px] xl:min-w-[125px] gap-x-4 place-self-center cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-2"
            >
              <img src={plusSymbol} className="h-[50%] w-[50%]" alt="Add Recipe" />
            </div>
          </div>
          <div className="mt-8 p-6 flex flex-col items-center justify-center gap-y-10 md:gap-y-0 md:p-0 md:w-full bg-neutral-100 md:grid md:grid-cols-12">
            <div
              className="flex w-[75%] md:w-full flex-col items-center justify-center rounded-md bg-neutral-200 hover:bg-sandybrown p-4 md:mb-5 text-center shadow-md md:col-start-1 md:col-end-4 cursor-pointer"
              onClick={handleFileUpload}
            >
              <h1 className="text-3xl">Add Picture</h1>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <img src={plusSymbol} className="mt-5 h-[40%] w-[40%]" alt="Upload" />
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-5 md:col-end-13"
              onClick={(event) => {
                if (event.target === titleRef.current) {
                  titleRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  Title:
                </h1>
                <input
                  className="h-auto w-[60%] py-2 rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  ref={titleRef}
                  value={title}
                  onChange={handleTitleChange}
                  maxLength={60}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 md:mb-5 p-4 text-center shadow-md md:col-start-1 md:col-end-13"
              onClick={(event) => {
                if (event.target === servingSizeRef.current) {
                  servingSizeRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  Serving size:
                </h1>
                <input
                  className="h-auto w-[60%] py-2 rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  type="number"
                  ref={servingSizeRef}
                  value={servingSize}
                  onChange={handleServingSizeChange}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 md:mb-5 p-4 text-center shadow-md md:col-start-1 md:col-end-13"
              onClick={(event) => {
                if (event.target === ingredientsRef.current) {
                  ingredientsRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  Ingredients:
                </h1>
                <textarea
                  className="h-auto w-[60%] rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  ref={ingredientsRef}
                  value={ingredients}
                  onChange={handleIngredientsChange}
                  maxLength={1000}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '1em',
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 md:mb-5 p-4 text-center shadow-md md:col-start-1 md:col-end-13"
              onClick={(event) => {
                if (event.target === tagsRef.current) {
                  tagsRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  Tags:
                </h1>
                <textarea
                  className="h-auto w-[60%] rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  ref={tagsRef}
                  value={tags}
                  onChange={handleTagsChange}
                  maxLength={1000}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '1em',
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 md:mb-5 p-4 text-center shadow-md md:col-start-1 md:col-end-13"
              onClick={(event) => {
                if (event.target === prepTimeRef.current) {
                  prepTimeRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  Preparation Time (Minutes): 
                </h1>
                <input
                  className="h-auto w-[60%] rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  type="number"
                  ref={prepTimeRef}
                  value={prepTime}
                  onChange={handlePrepTimeChange}
                  maxLength={10}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13"
              onClick={(event) => {
                if (event.target === howToPrepareRef.current) {
                  howToPrepareRef.current.focus();
                }
              }}
            >
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-2xl md:text-3xl flex-grow flex items-center justify-center">
                  How to Prepare:
                </h1>
                <textarea
                  className="h-auto w-[60%] rounded-md ml-4 md:ml-0 bg-neutral-100 text-center shadow-md resize-none text-xl md:text-2xl"
                  ref={howToPrepareRef}
                  value={howToPrepare}
                  onChange={handleHowToPrepareChange}
                  maxLength={1000}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '1em',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeTab;
