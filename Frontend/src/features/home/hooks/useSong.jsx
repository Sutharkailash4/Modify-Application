import { useContext } from "react";
import { SongContext } from "../song.context";
import { getSong } from "../services/song.api";

export const useSong = () => {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error("useSong must be used inside SongContextProvider");
  }

  const { loading, setLoading, song, setSong } = context;

  async function handleGetSong({ mood }) {
    try {
      setLoading(true);

      const data = await getSong({ mood });

      if (data?.song) {
        setSong(data.song);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    song,
    handleGetSong,
  };
};