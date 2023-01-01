import { screen, render } from "@testing-library/react";
import Options from "../Options";

describe("Options", function () {
  it("should display the image for each scoop from server", async function () {
    render(<Options optionType={"scoops"} />);

    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((element) => element?.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});
