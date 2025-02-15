import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
const Home = () => (
  <>
    <BookOverview createdAt={null} {...sampleBooks[0]} />

    <BookList 
      tittle="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
); 

export default Home;
