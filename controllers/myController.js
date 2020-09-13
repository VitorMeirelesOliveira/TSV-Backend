import { db } from "../models/index.js";

const Proposal = db.proposal;

const opc = async (req, res) => {
  const required_value = req.body.required_value;
  const cpf = req.body.cpf;

  const data = await Proposal.findOne({ cpf: cpf }).exec();

  const response = {
    total_value: 0,
    options: [],
  };

  if (data.available_value >= required_value) {
    response.total_value = required_value;
  } else {
    response.total_value = data.available_value;
  }

  const opc1 = response.total_value * 1.03;
  const opc1_qnt_portion = 12;
  const opc1_value_portion = opc1 / 12;
  const opc1_tax = "3%";

  response.options.push({
    qnt_portion: opc1_qnt_portion,
    value_portion: opc1_value_portion,
    tax: opc1_tax,
  });

  const opc2 = response.total_value * 1.05;
  const opc2_qnt_portion = 24;
  const opc2_value_portion = opc2 / 24;
  const opc2_tax = "5%";

  response.options.push({
    qnt_portion: opc2_qnt_portion,
    value_portion: opc2_value_portion,
    tax: opc2_tax,
  });

  const opc3 = response.total_value * 1.07;
  const opc3_qnt_portion = 36;
  const opc3_value_portion = opc3 / 36;
  const opc3_tax = "7%";

  response.options.push({
    qnt_portion: opc3_qnt_portion,
    value_portion: opc3_value_portion,
    tax: opc3_tax,
  });

  res.send(response);
};

const terms = async (req, res) => {
  const required_value = req.body.total_value;
  const cpf = req.body.cpf;
  const option = req.body.option;
  const optin = req.body.optin;

  const data = await Proposal.findOne({ cpf: cpf }).exec();

  const response = {};

  response.condition = {
    is_client: data.is_client,
    has_pix: data.has_pix,
    is_pix_safra: data.is_pix_safra,
    terms: data.terms,
  };

  res.send(response);
};

const acp = async (req, res) => {
  const cpf = req.body.cpf;
  const acp_terms = req.acp_terms;
  const acp_pix = req.acp_pix;

  const data = await Proposal.findOneAndUpdate({ cpf: cpf }, req.agreed, {
    agreed: true,
  });

  res.status(200).send("Ok!");
};

export default { opc, terms, acp };
