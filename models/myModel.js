export default (mongoose) => {
  const schema = mongoose.Schema({
    cpf: {
      type: String,
      required: true,
    },
    available_value: {
      type: Number,
      required: true,
    },
    is_client: {
      type: Boolean,
      required: true,
    },
    has_pix: {
      type: Boolean,
      required: true,
    },
    is_pix_safra: {
      type: Boolean,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    optin: Boolean,
    agreed: Boolean,
  });

  const Proposal = mongoose.model("proposal", schema, "proposal");

  return Proposal;
};
