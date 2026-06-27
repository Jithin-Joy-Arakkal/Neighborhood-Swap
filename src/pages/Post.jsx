import { useItems } from "../context/ItemContext";
import '../css/Post.css'

function Post(){

    const { items, setItems } = useItems();

    setItems([
        ...items,
        {
            id: Date.now(),
            name,
            category,
            type,
            image
        }
    ]);

    return(
        <section>
            <h1>Create Post</h1>
        </section>
    );
}

export default Post;
