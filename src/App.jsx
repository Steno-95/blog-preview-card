import Card from "./components/Card";
import CardAuthor from "./components/CardAuthor";
import CardDescription from "./components/CardDescription";
import CardHeader from "./components/CardHeader";
import CardImage from "./components/CardImage";
import CardTag from "./components/CardTag";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-linear-to-br from-amber-300 to-amber-400 h-dvh flex flex-col justify-center ">
      <main className="my-auto  ">
        <Card>
          <CardImage image={"/images/illustration-article.svg"} />
          <div className="space-y-1 preview">
            <CardTag>Learning</CardTag>
            <CardHeader date={"Published 21 Dec 2023"}>
              HTML & CSS foundations
            </CardHeader>
            <CardDescription>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </CardDescription>
          </div>
          <CardAuthor image={"/images/image-avatar.webp"}>
            {" "}
            Greg Hooper
          </CardAuthor>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
