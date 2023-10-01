import API from "../../api";

export const visitMapPoint = async (
  routeId: number | undefined,
  id: number | undefined
): Promise<void> => {
  if (id == null || routeId == null) return;

  try {
    await API.visitPoint(routeId, id);
  } catch (err) {
    console.error((err as any)?.message);
  }
};
