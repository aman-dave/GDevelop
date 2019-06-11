// @flow
import {
  type ResourceSource,
  type ChooseResourceFunction,
} from '../../ResourcesList/ResourceSource.flow';
import { type ResourceExternalEditor } from '../../ResourcesList/ResourceExternalEditor.flow';

type CommonProps = {|
  // The parameter
  parameterMetadata?: gdParameterMetadata,
  onChange: string => void,
  value: string,

  // Context
  project?: gdProject,
  layout?: ?gdLayout,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  isInline?: boolean,
  resourceSources?: Array<ResourceSource>,
  onChooseResource?: ChooseResourceFunction,
  resourceExternalEditors?: Array<ResourceExternalEditor>,

  // Pass the ParameterRenderingService to allow to render nested parameters
  parameterRenderingService?: {
    components: any,
    getParameterComponent: (type: string) => any,
  },
|};

export type ExpressionParameters = {|
  getParametersCount: () => number,
  getParameter: (index: number) => string,
|};

export type ParameterFieldProps = {|
  ...CommonProps,

  // Instruction in which the parameter is.
  instruction?: gdInstruction,
  // Metadata of the instruction in which the parameter is.
  instructionMetadata?: gdInstructionMetadata,
  // Expression in which the parameter is.
  expression?: ExpressionParameters,
  // Metadata of the instruction in which the parameter is.
  expressionMetadata?: gdExpressionMetadata,

  // The index of the parameter in the instruction or expression.
  parameterIndex?: number,
|};

export const getParameterValueOrDefault = (
  value: string,
  parameterMetadata: ?gdParameterMetadata
) => {
  const defaultValue =
    parameterMetadata && parameterMetadata.isOptional()
      ? parameterMetadata.getDefaultValue()
      : '';
  return value ? value : defaultValue;
};