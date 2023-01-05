import { deleteDoc, updateDoc } from "firebase/firestore";
import { getProjectsAccess } from "../dataAcess/projectsAcess";

export async function getProjectsAction(){
    const response = await getProjectsAccess();
    const projects = (response.docs.map((doc) =>
    ({ ...doc.data()})))
    return projects;
}