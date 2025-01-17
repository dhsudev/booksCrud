import { getDocs } from "firebase/firestore";
import { bookCollectionRef } from "../config/firebase";
import { info, success, error, debug } from "../utils/logger";

const getBooks = async () => {
    // read from db
    const cleanData = []
    try {
        info("Trying to get books from database...");
        const data = await getDocs(bookCollectionRef);
        success("Data collected succesfuly!");
        const cleanData = data.docs.map((doc) => ({
            ...doc.data(), id: doc.id,
        }));
        debug("Recived data:");
        console.log(cleanData);
    } catch (err) {
        error("Error while getting data:");
        console.log(err);
    }
    return cleanData;
};

export {getBooks};