import axios from 'axios';

// const AGENT_REST_API_URL="http://localhost:8080/api/agentStat/getTeamStats?teamname=1Group_Admin";

const AGENT_REST_API_URL="http://localhost:8080/api/agentStat/getTeamStats";

class AgentStat{
    getAgetStats(url){
        return axios.get(url);
    }
}

export default new AgentStat();