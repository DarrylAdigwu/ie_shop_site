import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Home from "@/app/page";

type MockImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | { src: string};
  fill: boolean | string;
}

jest.mock("next/image", () => {
  return function MockImage({ src, alt, fill, ...props }: MockImageProps) {
    const computedSrc = typeof src === "object" && src !== null ? src.src : src;
    return <img src={computedSrc} alt={alt} {...props} />
  }
})

jest.mock("~/public/images/white-ie-logo.png", () => ({
  src: "/mocked-logo-path.png",
  height: 200,
  width: 200,
  fill: "true"
}))

// Home Page Test Suite
describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />)
  });

  it("logo image", () => {
    const logoImage = screen.getByRole("img", {name: "white ie shops logo"});

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/mocked-logo-path.png")
  });

  it("company headline", () => {
    const headlineMessage = screen.getByText("The Official Mark of the Inland Empire");
    expect(headlineMessage).toBeInTheDocument();
  });

  it("link to product page", () => {
    const shopLink = screen.getByRole("link", { name: "Shop" });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute("href", "/shop");
  });

  it("link to contact page", () => {
    const contactLink = screen.getByRole("link", { name: "Contact" });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});