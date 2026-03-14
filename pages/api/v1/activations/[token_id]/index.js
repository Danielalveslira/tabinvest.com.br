import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import activation from "models/activation.js";
import user from "models/user.js";

const router = createRouter();

router.patch(patchHandler);

export default router.handler(controller.errorHandlers);

async function patchHandler(request, response) {
  const activationTokenId = request.query.token_id;

  const validActivationToken =
    await activation.findOneValidById(activationTokenId);

  const usedActivationToken =
    await activation.markTokenAsUsed(activationTokenId);

  await user.activateUserByUserId(validActivationToken.user_id);

  return response.status(200).json(usedActivationToken);
}
