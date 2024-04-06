import express, { Request, Response } from "express";

export const handlePost = async (req: Request, res: Response) => {
  try {
    console.log("post_controller");
    return res.send("post");
  } catch (error) {}
};

export const handleEdit = async (req: Request, res: Response) => {
  try {
    console.log("edit_controller");
    return res.send("edit");
  } catch (error) {}
};
