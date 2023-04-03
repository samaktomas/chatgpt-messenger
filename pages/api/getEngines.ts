import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../util/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function getEngines(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openai.listModels().then((res: any) => res.data.data);

  const modelOptions: Option[] = models.map((model: any) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
}
