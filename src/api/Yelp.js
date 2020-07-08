import axios from 'axios'

export default axios.create({
  baseURL: "http://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _o7Db_pcGPu8b2v-zPwQPkdwegVAeGNB1TqScpRbbKQljDDW4WImSLGiwNpMPIKknIcAArLCPym3hTHVqgpU0UQurxy5EwdGWpYvHfVG63uzm5SjUMssgIs4g_T9XnYx",
  },
});