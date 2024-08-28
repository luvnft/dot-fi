import { useEffect, useState } from "react";
import { supabase } from "./client";

// load listing

export const fetchComments = async (arIds = []) => {
  try {
    let query = supabase
      .from("posts")
      .select(
        `
        *
      
      `
      )
      .in("id", arIds);

    const { data, error } = await query;
    console.log(error, "error supabase");
    return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};

export async function updateData(tableName, filter, newData) {
  try {
    const { data: updatedData, error } = await supabase
      .from(tableName)
      .update(newData)
      .where(filter);
    if (error) {
      // setError(error.message);
    } else {
      // setUpdatedData(updatedData);
    }
  } catch (error) {
    setError(error.message);
  }
}
