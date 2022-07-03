import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface InitialState {
  count: number;
  text?: string;
}

const initialState: InitialState = {
  count: 0,
  text: '我是文字',
};

interface PromiseNum {
  number: number;
}

const promise_one: Promise<PromiseNum> = new Promise((res) => {
  setTimeout(() => {
    res({ number: 10 });
  }, 3000);
});

// 异步Action
export const getAsyncInfo = createAsyncThunk('state/getAsyncInfo', async () => {
  const data = await promise_one;
  return data;
});

const { reducer, actions } = createSlice({
  name: 'state', // 命名空间，可以自动的把每一个action进行独立，解决了action的type出现同名的文件。在使用的时候默认会把使用name/actionName
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    change: (state) => {
      state.text = '我是改变了的文字';
    },
    back: (state) => {
      state.text = '我是文字';
    },
  },
  extraReducers: (builder) => {
    // 进行请求阶段的一些操作
    builder.addCase(getAsyncInfo.pending, () => {
      console.log('进行中');
    });
    builder.addCase(getAsyncInfo.fulfilled, (state, action) => {
      console.log('action.payload: ', action.payload); //{number:"10"}
      console.log('state: ', state.text); //我是文字
      state.count += action.payload.number;
      console.log('成功');
    });
    builder.addCase(getAsyncInfo.rejected, () => {
      console.log('失败');
    });
  },
});

export const { add, minus, change, back } = actions;
export default reducer;
