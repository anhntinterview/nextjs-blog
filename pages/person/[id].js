import { data } from "../../data";

export default function handler(request, response) {
    const { method } = request;

    if (method === "GET") {
        const { id } = request.query;

        const person = data.find((person) => person.id.toString() === id);

        if (!person) {
            return response.status(400).json("User not found");
        }

        return response.status(200).json(person);
    }
}