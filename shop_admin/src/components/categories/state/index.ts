import AttributeGroup from "../AtrributeGroup"

interface CategoriesState {
    groups: AttributeGroup[]
}

interface Action {
    type: string;
    payload: any;
}

export const initState: CategoriesState = {
    groups: [
        {
            title: "مشخصات کلی",
            attributes: []
        }
    ]

}

export const reducer = (state: CategoriesState, action: Action): CategoriesState => {

    let newState: CategoriesState;

    switch (action.type) {
        case "ADD_ATTRIBUTE_CATEGORY":
            newState = {
                ...state, groups: [...state.groups, {
                    title: action.payload.title,
                    attributes: []
                }]
            };
            break
        default:
            throw new Error(`${action.type} is not defind in this state`);
    }
    return newState;

}