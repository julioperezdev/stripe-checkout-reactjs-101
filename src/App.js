import React from "react"
import Paticular_Card from "./component/particular-card/Particular-card";

import "./App.css"

let stripePromise 

const App = () =>{

    return (
        <div className="card-list-global">
            <Paticular_Card
            title="Introduccion a Java"
            imageUrl="https://pseudoinformatico.files.wordpress.com/2013/06/duke-java.png"
            price="10"
            currency="USD"
            stripePrice={process.env.REACT_APP_JAVA_BASIC_PRICE}
            />
            <Paticular_Card
            title="Java Profesional"
            imageUrl="https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.png"
            price="12"
            currency="USD"
            stripePrice={process.env.REACT_APP_JAVA_PROFESSIONAL_PRICE}
            />
            <Paticular_Card
            title="Spring Boot"
            imageUrl="https://www.fontana.com.ar/wp-content/uploads/2018/10/spring-boot-logo.png"
            price="10"
            currency="USD"
            stripePrice={process.env.REACT_APP_SPRINGBOOT_PRICE}
            />
        </div>
    )
}

export default App;