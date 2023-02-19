import {createReduxStore} from "../../store/store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";

export const renderWithRedux = (component, initialState) => {
    const store = createReduxStore(initialState)

    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}