import { getDocs } from "firebase/firestore";
import { bookCollectionRef } from "../config/firebase";
import { info, success, error, debug } from "../utils/logger";

const getBooks = async () => {
    // Inicializar cleanData fuera del try
    let cleanData = [];
    try {
        info("Trying to get books from database...");
        const data = await getDocs(bookCollectionRef);
        success("Data collected successfully!");

        // Asignar el resultado del mapeo a la variable cleanData
        cleanData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        debug("Received data:", cleanData);
    } catch (err) {
        error("Error while getting data:");
        console.log(err);
    }

    return cleanData; // Retornar cleanData correctamente
};


export {getBooks};