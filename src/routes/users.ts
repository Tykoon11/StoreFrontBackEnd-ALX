import express from "express";
import { User, UsersStore } from "../models/users";

const users = express.Router();

users.get('/' )