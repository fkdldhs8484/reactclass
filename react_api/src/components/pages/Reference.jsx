import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

//s꼭 붙이기 두번째는 무조건 set 붙여야함
const Reference = () => {
    const [references, setReferences] = useState([]);

    useEffect(() => {
        fetch(
            "https://fkdldhs8484.github.io/reactclass/react_api/src/Utils/reference01.json"
        )
            .then((response) => response.json())
            .then((result) => setReferences(result.cssRefer))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["Reference", "Book"]} />
                <ReferCont references={references} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;
