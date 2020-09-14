import { db } from "../models/index.js";

const Proposal = db.proposal;

const opc = async (req, res) => {
  const requiredValue = req.body.requiredValue;
  const cpf = req.body.cpf;

  const data = await Proposal.findOne({ cpf: cpf }).exec();

  const response = {
    totalValue: 0,
    options: [],
  };

  if (data.availableValue >= requiredValue) {
    response.totalValue = requiredValue;
  } else {
    response.totalValue = data.availableValue;
  }

  const opc1 = response.totalValue * 1.03;
  const opc1QntPortion = 12;
  const opc1ValuePortion = opc1 / 12;
  const opc1Tax = "3%";

  response.options.push({
    qntPortion: opc1QntPortion,
    valuePortion: opc1ValuePortion,
    tax: opc1Tax,
  });

  const opc2 = response.totalValue * 1.05;
  const opc2QntPortion = 24;
  const opc2ValuePortion = opc2 / 24;
  const opc2Tax = "5%";

  response.options.push({
    qntPortion: opc2QntPortion,
    valuePortion: opc2ValuePortion,
    tax: opc2Tax,
  });

  const opc3 = response.totalValue * 1.07;
  const opc3QntPortion = 36;
  const opc3ValuePortion = opc3 / 36;
  const opc3Tax = "7%";

  response.options.push({
    qntPortion: opc3QntPortion,
    valuePortion: opc3ValuePortion,
    tax: opc3Tax,
  });

  res.send(response);
};

const terms = async (req, res) => {
  const requiredValue = req.body.totalValue;
  const cpf = req.body.cpf;
  const option = req.body.option;
  const optin = req.body.optin;

  const data = await Proposal.findOne({ cpf: cpf }).exec();

  const response = {};

  response.condition = {
    isClient: data.isClient,
    hasPix: data.hasPix,
    isPixSafra: data.isPixSafra,
    terms: data.terms,
  };

  res.send(response);
};

const acp = async (req, res) => {
  const cpf = req.body.cpf;
  const acpTerms = req.acpTerms;
  const acpPix = req.acpPix;

  const data = await Proposal.findOneAndUpdate({ cpf: cpf }, req.agreed, {
    agreed: true,
  });

  res.status(200).send("Ok!");
};

export default { opc, terms, acp };
