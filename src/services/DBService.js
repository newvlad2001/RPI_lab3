import { useEffect, useState, useRef } from "react";

export default function useDBService(jsonFileName) {
    const [loaded, setLoaded] = useState(false);
    const db = useRef(null);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/db/" + jsonFileName)
            .then(res => res.json())
            .then(jsonObj => {
                if (jsonObj === undefined) throw new Error(jsonFileName + " was not found");
                if (!jsonObj.hasOwnProperty("data")) throw new Error("Invalid file format " + jsonFileName);
                db.current = jsonObj.data;
                setLoaded(true);
            });
    }, []);

    function search(key, value, exact = false) {
        if (value === "") return db.current;
        let res = [];
        if (db.current !== null) {
            db.current.forEach(el => {
                let val = getKey(el, key);
                if (val !== null) {
                    if ((exact === true && val === value) || (exact === false && val.toLowerCase().indexOf(value.toLowerCase()) !== -1)) {
                        res.push(el);
                    }
                }
            });
        }

        return res;
    }

    function getKey(element, key) {
        let keys = key.split('.');
        let temp = element;
        keys.forEach(subKey => {
            if (temp.hasOwnProperty(subKey)) {
                temp = temp[subKey];
            } else {
                temp = null;
                return;
            }
        });
        return temp;
    }

    return [loaded, search];
}