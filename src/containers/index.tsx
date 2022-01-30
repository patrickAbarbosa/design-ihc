import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginContainer } from "./Login/LoginContainer";
import { BookingContainer } from "./Booking";
import { ResourcesContainer } from "./Resources";
import { SearchResourceContainer } from "./SearchResource";

export const Containers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={LoginContainer} />
        <Route path="/minhas-reservas" component={BookingContainer} />
        <Route path="/recursos" component={ResourcesContainer} />
        <Route path="/reservar-recurso" component={SearchResourceContainer} />
      </Switch>
    </BrowserRouter>
  );
};
