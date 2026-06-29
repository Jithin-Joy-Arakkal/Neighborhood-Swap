import { useItems } from "../context/ItemContext";
import ItemGrid from "../components/ItemGrid";
import '../css/Home.css'

function Home(){
    const { items } = useItems();
    return(
    <ItemGrid items={items} emptyMessage="There are currently no items yet."/>
    );
}

export default Home