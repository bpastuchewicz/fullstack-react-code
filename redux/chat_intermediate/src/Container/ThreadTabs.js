import { Tabs } from "../View/Tabs.js"
import { connect } from 'react-redux';
import { openThread } from "../Redux/Action/thread";

const mapStateToTabsProps = (state) => {
    const tabs = state.threads.map(t => (
        {
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id,
        }
    ));

    return {
        tabs,
    };
};
const mapDispatchToTabsProps = (dispatch) => (
    {
        onClick: (id) => (
            dispatch(openThread(id))
        ),
    }
);

export const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabsProps
)(Tabs);