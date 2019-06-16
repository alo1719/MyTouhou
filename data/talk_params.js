var __reimuBossTalkParams = [];
var __marisaBossTalkParams = [];

__reimuBossTalkParams.push(
    {
        'serif': '你在干些什么, 露米娅?',
        'left': {'character': 'reimu', 'active': true},
        'right': {'character': 'rumia'},
    }
);

__reimuBossTalkParams.push(
    {
        'serif': '好的, 但是我饿了, 我能吃掉你吗?',
        'left': {'character': 'reimu'},
        'right': {'character': 'rumia', 'active': true},
    }
);

__reimuBossTalkParams.push(
    {
        'serif': '抱歉, 我现在很忙. 我之后可以和你一起玩.',
        'left': {'character': 'reimu', 'active': true},
        'right': {'character': 'rumia'},
    }
);


__marisaBossTalkParams.push(
    {
        'serif': '嘿, 魔理沙, 你在干什么?',
        'left': {'character': 'marisa'},
        'right': {'character': 'rumia', 'active': true},
    }
);

__marisaBossTalkParams.push(
    {
        'serif': '啊? 我正在享受飞行的快乐.',
        'left': {'character': 'marisa', 'active': true},
        'right': {'character': 'rumia'},
    }
);

__marisaBossTalkParams.push(
    {
        'serif': '是--这--样--吗?',
        'left': {'character': 'marisa'},
        'right': {'character': 'rumia', 'active': true},
    }
);

var __stage1BossTalkParams = [];
__stage1BossTalkParams.push(__reimuBossTalkParams);
__stage1BossTalkParams.push(__marisaBossTalkParams);

var __reimuClearTalkParams = [];

__reimuClearTalkParams.push(
    {
        'serif': '累了.',
        'left': {'character': 'reimu', 'active': true},
    }
);

var __marisaClearTalkParams = [];

__marisaClearTalkParams.push(
    {
        'serif': '我做到了!',
        'left': {'character': 'marisa', 'active': true},
    }
);

var __stage1ClearTalkParams = [];
__stage1ClearTalkParams.push(__reimuClearTalkParams);
__stage1ClearTalkParams.push(__marisaClearTalkParams);

var __stage1TalksParams = [];
__stage1TalksParams.push(__stage1BossTalkParams);
__stage1TalksParams.push(__stage1ClearTalkParams);


var __reimuBossTalk2Params = [];
__reimuBossTalk2Params.push(
    {
        'serif': '抱歉, 我没什么好聊的.',
        'left': {'character': 'reimu', 'active': true},
        'right': {'character': 'chilno'},
    }
);

__reimuBossTalk2Params.push(
    {
        'serif': '什, 什么?',
        'left': {'character': 'reimu'},
        'right': {'character': 'chilno', 'active': true},
    }
);


var __marisaBossTalk2Params = [];
__marisaBossTalk2Params.push(
    {
        'serif': '抱歉, 我没什么好聊的.',
        'left': {'character': 'marisa', 'active': true},
        'right': {'character': 'chilno'},
    }
);

__marisaBossTalk2Params.push(
    {
        'serif': '什, 什么?',
        'left': {'character': 'marisa'},
        'right': {'character': 'chilno', 'active': true},
    }
);


var __stage2BossTalkParams = [];
__stage2BossTalkParams.push(__reimuBossTalk2Params);
__stage2BossTalkParams.push(__marisaBossTalk2Params);


var __stage2TalksParams = [];
__stage2TalksParams.push(__stage2BossTalkParams);
__stage2TalksParams.push(__stage1ClearTalkParams);


var __talkParams = [];
__talkParams.push(__stage1TalksParams);
__talkParams.push(__stage2TalksParams);

