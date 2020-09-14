export default (mongoose) => {
  const schema = mongoose.Schema({
    cpf: {
      type: String,
      required: true,
    },
    availableValue: {
      type: Number,
      required: true,
    },
    isVlient: {
      type: Boolean,
      required: true,
    },
    hasPix: {
      type: Boolean,
      required: true,
    },
    isPixSafra: {
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
