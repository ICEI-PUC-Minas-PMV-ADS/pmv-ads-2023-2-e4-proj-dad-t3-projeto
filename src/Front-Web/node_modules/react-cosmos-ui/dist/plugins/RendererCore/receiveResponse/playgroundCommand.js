export function receivePlaygroundCommandResponse(context, { payload }) {
    const { command } = payload;
    const core = context.getMethodsOf('core');
    core.runCommand(command);
}
