const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/lyrics', async (request, response) => {
  const { artist, title } = request.query;

  try {
    const { data } = await axios.get(
      `https://api.lyrics.ovh/v1/${artist}/${title}`
    );
    response.json(data);
  } catch (e) {
    response.json(e.toString());
  }
});

module.exports = router;
