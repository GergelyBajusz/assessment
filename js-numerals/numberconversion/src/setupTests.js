import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from 'jest-react-hooks-shallow';

configure({ adapter: new Adapter() });

// pass an instance of jest to `enableHooks()`
enableHooks(jest);